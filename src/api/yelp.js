import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rc5RrN9LQlasSUeYGQi7vqoOdrM9UvXTR4KwbG2RwjERQnecoec7RTYBwLHGxAMi0Bq5HgpYQ4j7HSqIMa1G1q0uPCgomMBihvmybLuXmDMAFWqkrpJc5tA-Fa4nYnYx",
  },
})
