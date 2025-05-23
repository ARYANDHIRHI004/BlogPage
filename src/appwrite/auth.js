import config from "../config/config.js";
import {Account, ID, Client} from "appwrite"

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client 
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
    }
    
    async createaccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call another method
                return this.login(email, password)

            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(error);
        }
        return null
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
        }
        return null
    }



}

const authService = new AuthService();

export default authService