import client from '../client'

const searchKeywordAPI = ({ keywordType, keyword }) => {
    return client.get(`/routes/search/${keywordType}/${keyword}`)
}

export default searchKeywordAPI;