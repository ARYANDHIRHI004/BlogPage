import config from "../config/config.js";
import { ID, Client, Databases, Storage, Query} from "appwrite"


export class Service{
    client = new Client()
    Databases
    bucket
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID)
        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.Databases.createDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.Databases.updateDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }

            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async deletePost(slug){
        try {
            return await this.Databases.deleteDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.Databases.listDocuments(
                config.appwriteDbId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(error);
            return false
            
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    getFilePreview(fileId){
        try {
           return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

}

const service = new Service()

export default service