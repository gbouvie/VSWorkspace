import { PropsWithChildren } from "react"

type TitleProps = {
    color?: string;
};

export function Title(props: PropsWithChildren<TitleProps>) {
    const { color = 'green', children } = props;
    return <h1 style={{ color }}>{ children }</h1>
}
