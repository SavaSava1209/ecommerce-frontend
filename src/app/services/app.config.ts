import { environment } from "src/environments/environment";

export class AppConfig {
    
    // public static API_URL = 'http://ec2-3-134-77-43.us-east-2.compute.amazonaws.com:8080';
    public static API_URL = environment.API_URL
}