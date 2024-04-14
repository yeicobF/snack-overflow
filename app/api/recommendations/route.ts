import { response } from '../_common';
import {
  MOCK_RECOMMENDATIONS_RESTAURANT_A,
  MOCK_RECOMMENDATIONS_RESTAURANT_B,
  MOCK_RECOMMENDATIONS_RESTAURANT_C,
} from './mockRecommendations';

type Params = {
  people: string;
};
const getMockRecommendations = () => {
  const recommendationA =
    MOCK_RECOMMENDATIONS_RESTAURANT_A[
      Math.floor(Math.random() * MOCK_RECOMMENDATIONS_RESTAURANT_A.length)
    ];
  const recommendationB =
    MOCK_RECOMMENDATIONS_RESTAURANT_B[
      Math.floor(Math.random() * MOCK_RECOMMENDATIONS_RESTAURANT_B.length)
    ];
  const recommendationC =
    MOCK_RECOMMENDATIONS_RESTAURANT_C[
      Math.floor(Math.random() * MOCK_RECOMMENDATIONS_RESTAURANT_C.length)
    ];
  return { providers: [recommendationA, recommendationB, recommendationC] };
};

export async function GET(request: Request, context: { params: Params }) {
  const res = getMockRecommendations();
  return response(res);
}

// Define params type according to your route parameters (see table below)
