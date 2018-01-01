export * from "../../node_modules/@types/react-redux";

import { ComponentType, ComponentClass } from "react";
import { Dispatchable } from "redux";

import { IStoreState } from "@state/store";

interface IConnect {
  <ExtProps, MapProps>(
    mapsState: (s: IStoreState, props?: ExtProps) => MapProps
  ): (Comp: ComponentType<ExtProps & MapProps>) => ComponentClass<ExtProps>;
  <
    ExtProps,
    MapProps,
    DispatchProps extends {
      [name: string]: Dispatchable;
    }
  >(
    mapsState: ((s: IStoreState, props?: ExtProps) => MapProps) | null,
    mapDispatch?: DispatchProps
  ): (
    Comp: ComponentType<ExtProps & MapProps & DispatchProps>
  ) => ComponentClass<ExtProps>;
}
export declare const connect: IConnect;
