import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "./api";
import { RegistrationData } from "./validation";

// Query keys
export const queryKeys = {
  currencies: ["currencies"],
  regions: ["regions"],
};

// Hooks
export const useCurrencies = () => {
  return useQuery({
    queryKey: queryKeys.currencies,
    queryFn: apiService.getCurrencies,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useRegions = () => {
  return useQuery({
    queryKey: queryKeys.regions,
    queryFn: apiService.getRegions,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RegistrationData) => apiService.register(data),
    onSuccess: () => {
      // Invalidate and refetch relevant queries
      queryClient.invalidateQueries({ queryKey: queryKeys.currencies });
      queryClient.invalidateQueries({ queryKey: queryKeys.regions });
    },
  });
};
