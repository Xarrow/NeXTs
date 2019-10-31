const ROOT_DOMAIN = "helixcs.tk";

const ROOT_API = `https://${ROOT_DOMAIN}`;

const SIMPLEBOX_API =  `https://api-simplebox.${ROOT_DOMAIN}`;
//  图片流API
export const galleryAPI = `${ROOT_API}/api/next/gallery?folderName=%s&offset=%s&currentPage=1&pageSize=%s&currentPage=%s`;
// mdx 文章列表
export const mdxListAPI = `${SIMPLEBOX_API}/api/next/mdx/list?folderName=%s`;
// mdx 文章
export const mdxAPI = `${SIMPLEBOX_API}/api/next/mdx?fileId=%s`;

export const mdxAPI1 = `${SIMPLEBOX_API}/api/read/document/name/%s`;