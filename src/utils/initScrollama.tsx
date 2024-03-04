/** @format */
import scrollama, { DecimalType } from "scrollama";

export interface IScrollama {
  name: string;
  stepQuery: string;
  offset?: DecimalType | undefined;
}

export interface IScrollamaCallbacks extends IScrollama {
  onStepEnter: (r: any) => void;
  onStepExit: (r: any) => void;
  onStepProgress?: (r: any) => void;
}

export const initScrollama = ({ ...config }: IScrollamaCallbacks) => {
  const scroller = scrollama();

  scroller
    .setup({
      step: `.${config.stepQuery}`,
      offset: config.offset ? config.offset : 0.5,
    })
    .onStepEnter(config.onStepEnter)
    .onStepExit(config.onStepExit);

  return scroller;
};
