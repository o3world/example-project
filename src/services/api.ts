class APIService {
  private baseUrl: string | undefined;
  private config: RequestInit;

  constructor() {
    this.baseUrl = process.env.BASE_URL;

    this.config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
  }

  getTests(): any {
    this.config = {
      ...this.config,
      method: 'GET',
    };

    return fetch('tests', this.config).then((response) => response.json());
  }

  async getUsers(): Promise<any[]> {
    this.config = {
      ...this.config,
      method: 'GET',
    };

    const usersResults = await fetch('users', this.config).then((response) => response.json());

    return usersResults;
  }

  postTestResults(results: any): Promise<Response> {
    // Mutate results to match with API body request
    let body: any = {
      id: results.id,
      testName: results.name,
    };

    const answers: any[] = [];

    results.answers.forEach((answer: string) =>
      answers.push({
        input: answer,
      }),
    );

    body = {
      ...body,
      answers,
    };

    this.config = {
      ...this.config,
      method: 'POST',
      body: JSON.stringify(body),
    };

    return fetch('tests/results', this.config).catch((error) => error);
  }
}

export default APIService;
