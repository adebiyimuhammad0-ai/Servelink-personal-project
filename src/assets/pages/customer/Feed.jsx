import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import FeedHeader from "../../../components/feeds/FeedHeader";
import CategoryFilter from "../../../components/feeds/CategoryFilter";
import CreatePostCard from "../../../components/feeds/CreatePostCard";
import PostCard from "../../../components/feeds/PostCard";

import categories from "../../../data/categories";
import posts from "../../../data/posts";
import providers from "../../../data/providers";

function Feed() {
  const [search, setSearch] =
    React.useState("");

  const [category, setCategory] =
    React.useState("all");

  const [feedPosts, setFeedPosts] =
    React.useState(posts);

  const getProvider = (providerId) =>
    providers.find(
      (provider) =>
        provider.id === providerId
    );

  const handleLike = (postId) => {
    setFeedPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleSave = (postId) => {
    setFeedPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              saved: !post.saved,
            }
          : post
      )
    );
  };

  const filteredPosts =
    feedPosts.filter((post) => {
      const provider = getProvider(
        post.providerId
      );

      const matchesCategory =
        category === "all" ||
        post.category === category;

      const text = [
        post.content,
        provider?.name,
        provider?.category,
        provider?.location,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        text.includes(
          search.toLowerCase()
        )
      );
    });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor:
          "background.default",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <FeedHeader
          search={search}
          onSearchChange={setSearch}
        />

        <CategoryFilter
          categories={categories}
          activeCategory={category}
          onCategoryChange={setCategory}
        />

        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              md: 8,
              lg: 7,
            }}
          >
            <CreatePostCard
              currentUser={{
                name: "Adebiyi",
              }}
              onCreatePost={() =>
                console.log(
                  "Create post"
                )
              }
            />

            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                provider={getProvider(
                  post.providerId
                )}
                onLike={handleLike}
                onSave={handleSave}
                onShare={(id) =>
                  console.log(
                    "Share:",
                    id
                  )
                }
                onComment={(id) =>
                  console.log(
                    "Comment:",
                    id
                  )
                }
                onViewProvider={(id) =>
                  console.log(
                    "Provider:",
                    id
                  )
                }
              />
            ))}
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
              lg: 3,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid",
                borderColor:
                  "divider",
                position: "sticky",
                top: 24,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
              >
                Find a professional
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Browse trusted local
                service providers.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Feed;