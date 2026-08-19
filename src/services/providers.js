import providers from "../data/providers";

export const getProviders = async () => {
  return providers;
};

export const getProviderById = async (
  providerId
) => {
  return providers.find(
    (provider) =>
      provider.id === Number(providerId)
  );
};