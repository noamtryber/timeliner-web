
import { Competitor } from "../types";
import { frameio } from "./frameio";
import { vimeo } from "./vimeo";
import { wipster } from "./wipster";
import { dropbox } from "./dropbox";
import { clickup } from "./clickup";

export const competitors: Competitor[] = [
  frameio,
  vimeo,
  wipster,
  dropbox,
  clickup
];
