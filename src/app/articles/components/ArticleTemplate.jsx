

const getPost = async (pid) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blog/${pid}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch Posts");
        }
        const resDatalist = res.json();
        return resDatalist;

    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

const ArticleTemplate = async ({pid}) => {
    const articlefetch = await getPost(pid);

    return (
        <>
            <div className="container">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{articlefetch.data.title}</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">{articlefetch.data.category} </p>
            </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 custom-sec-div1">
                    <p>{articlefetch.data.desc}</p>
                </div>
            </div>
        </>
    )
}

export default ArticleTemplate
