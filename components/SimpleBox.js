import fetch from 'isomorphic-unfetch';
import {mdxListAPI,mdxAPI1,mdxAPI}  from "../components/APIConfig";
import {stringParse} from '../components/Utils';

// 文章列表
export const mdxListAPIRequest  = async (folderName)=>{
    const response =  await fetch(stringParse(mdxListAPI, folderName));
    const responseText = await response.json();
    return responseText;
}

// markdown 文章 fileId
export const mdxAPIRequest = async (fileId)=>{
    const response = await fetch(stringParse(mdxAPI,fileId));
    const responseText = await response.json();
    return responseText;
}
