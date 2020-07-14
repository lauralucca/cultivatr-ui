const baseURL =  process.env.NODE_ENV === "production"
    ? "https://cultivatr-api.herokuapp.com"
    : "http://localhost:8080"

export default baseURL
