import { AppRepositories } from "@/repositories/appRepositories";
import { invariant } from "@/utils/invariant";
import { inject } from "vue";

export const appRepositoriesSymbol = Symbol("appRepository");

export const useAppRepositories = (): AppRepositories => {
  const appRepositories: AppRepositories | undefined = inject(
    appRepositoriesSymbol
  );
  invariant(appRepositories, "appRepositories must be provided");
  return appRepositories;
};
