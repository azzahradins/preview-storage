import Header from "../../templates/header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
