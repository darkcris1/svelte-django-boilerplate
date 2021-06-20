export async function cleanAsync<T>(promise: Promise<T>){
    try {
        const res = await promise;
        return [res, null]
    } catch (error) {
        return [null,error]
    }
}