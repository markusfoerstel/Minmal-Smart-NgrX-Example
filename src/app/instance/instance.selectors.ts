import { createSmartSelector, getTopChildRows } from "@smarttools/smart-ngrx";
import { Instance } from "./instance";
import { featureName } from "../tree-standard/tree-standard.feature";


export const selectInstanceEntities = createSmartSelector<Instance>(
  featureName,
  'instances',
);
