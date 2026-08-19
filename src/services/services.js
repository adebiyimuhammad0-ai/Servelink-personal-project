import services from "../data/services";

export const getServices = async () => {
  return services;
};

export const getServiceById = async (
  serviceId
) => {
  return services.find(
    (service) =>
      service.id === Number(serviceId)
  );
};