import axios from 'axios';

export class WikipediaLib {
    private lang: string;

    constructor(lang: string) {
        this.lang = lang;
    };

    public async searchQuery(query: string): Promise<string> {
        const response = await axios.get(`https://${this.lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURI(query)}`);

        return response.data.extract;
    };
}