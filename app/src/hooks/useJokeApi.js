import { useCallback, useState } from "react"
import { chuckNorrisApi } from "../api/jokeApi"

export const useJokeApi = () => {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState("")

  const getRandomJoke = useCallback(async () => {
    setLoading(true)
    try {
      chuckNorrisApi.get("/random").then((response) => {
        // console.log("response: ", response)
        setJoke(response.data.value)
        setLoading(false)
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }, [])
  return { loading, getRandomJoke, joke }
}
