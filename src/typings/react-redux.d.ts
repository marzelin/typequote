export * from "../../node_modules/@types/react-redux";

import { ComponentType, ComponentClass } from "react";
import { Dispatchable } from "redux";

import { IStoreState } from "@state/store";

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

interface IConnect {
  <ExtProps, MapProps>(
    mapsState: (s: IStoreState, props?: ExtProps) => MapProps
  ): <T extends MapProps & ExtProps>(
    Comp: ComponentType<T>
  ) => ComponentClass<Omit<T, keyof MapProps>>;
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
