import Head from "next/head";

interface Props {
    title: string
}

function HeadSEO(props: Props) {
    return <Head>
        <title>{props.title}</title>
        // ... other meta-tags
    </Head>
}

export default HeadSEO