
export const rootAPI = "https://helixcs.tk";
//  图片流API
export const galleryAPI = `${rootAPI}/api/next/gallery?folderName=%s&offset=%s&currentPage=1&pageSize=%s&currentPage=%s`;
// mdx 文章列表
export const mdxListAPI = `${rootAPI}/api/next/mdx/list?folderName=%s`;
// mdx 文章
export const mdxAPI = `${rootAPI}/api/next/mdx?fileId=%s`;

export const mdxAPI1 = `${rootAPI}/api/read/document/name/%s`;