import apisauce from 'apisauce';

export default (baseUrl) => {
    const apiInstance = apisauce.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    });
    
    apiInstance.addMonitor((response) => {
      console.log('Log from API Monitor', response);
    });

    return apiInstance;
}