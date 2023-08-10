import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import { RECIPE_LIST } from 'constants/recipe';
import { rest } from 'msw';
import { dateToString, getTomorrow } from 'utils/date';

const recipeHandler = [
  rest.get(`${baseURL}${API_PATH.POPULAR_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),
  rest.get(`${baseURL}${API_PATH.FAVORITE_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),

  rest.get(`${baseURL}${API_PATH.ALL_RECIPE}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: [
          {
            name: '박민희',
            recipe_name: '서울식 불고기',
            summary: '자작자작한 국물이 매력적인 불고기!',
            img_url:
              'https://m.cj.co.kr/images/theKitchen/PHON/0000001560/0000005597/0000001560.jpg',
            type_class: '한식',
            recipe_id: 1,
            review_count: 0,
            star: '4.3',
          },
          {
            name: '박민희',
            recipe_name: '서울식 불고기',
            summary: '자작자작한 국물이 매력적인 불고기!',
            img_url:
              'https://m.cj.co.kr/images/theKitchen/PHON/0000001560/0000005597/0000001560.jpg',
            type_class: '중식',
            recipe_id: 2,
            review_count: 0,
            star: '4.3',
          },
          {
            name: '박민희',
            recipe_name: '서울식 불고기',
            summary: '자작자작한 국물이 매력적인 불고기!',
            img_url:
              'https://m.cj.co.kr/images/theKitchen/PHON/0000001560/0000005597/0000001560.jpg',
            type_class: '양식',
            recipe_id: 3,
            review_count: 0,
            star: '4.3',
          },
        ],
      }),
    );
  }),

  rest.get(
    `${baseURL}${API_PATH.DETAIL_RECIPE}/:recipe_id`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
          result: [
            [
              {
                recipe_id: 3,
                userid: 2,
                user_img_url: null,
                nickname: '쫑',
                recipe_name: '스파게티',
                cook_time: 30,
                difficulty: 2,
                img_url: 'https://example.com/spaghetti.jpg',
                quantity: null,
              },
            ],
            [
              {
                cook_order: 1,
                description: '감자와 야채들을 씻어줍니다',
                order_img_url: null,
              },
              {
                cook_order: 2,
                description: '재료를 손톱만큼 다져줍니다',
                order_img_url: 'https:202020',
              },
            ],
            [
              {
                recipe_id: 3,
                DetailIngre_type: 1,
                ingre_name: '감자',
                ingre_english: 'potato',
                amount: null,
              },
              {
                recipe_id: 3,
                DetailIngre_type: 4,
                ingre_name: '버섯',
                ingre_english: 'mushroom',
                amount: '60g',
              },
            ],
          ],
        }),
      );
    },
  ),
  rest.get(`${baseURL}${API_PATH.WEEK_CALENDAR}/:date`, (req, res, ctx) => {
    const { date } = req.params;
    const d = new Date(date);
    const day = Array(7)
      .fill()
      .map((_, idx) => (idx === 0 ? date : dateToString(getTomorrow(d))));
    const data = {
      isSuccess: true,
      code: 1000,
      message: '성공',
      result: [
        {
          userid: 5,
          recipe_id: null,
          bydate: day[0],
          meal_time: 1,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 2,
          bydate: day[0],
          meal_time: 3,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 23,
          bydate: day[1],
          meal_time: 2,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 4,
          bydate: day[2],
          meal_time: 1,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 5,
          bydate: day[5],
          meal_time: 1,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 6,
          bydate: day[5],
          meal_time: 2,
          name: '가지 볶음',
        },
      ],
    };
    return res(ctx.status(200), ctx.json({ ...data }));
  }),
  rest.get(`${baseURL}${API_PATH.SEARCH_RECIPE}`, (req, res, ctx) => {
    const recipe_name = req.url.searchParams.get('recipe_name');
    return res(
      ctx.status(200),
      ctx.json({
        result: [
          {
            recipe_name: `${recipe_name} 볶음`,
            recipe_id: 1,
          },
          {
            recipe_name: `${recipe_name} 찌개`,
            recipe_id: 2,
          },
          {
            recipe_name: `${recipe_name} 지짐`,
            recipe_id: 3,
          },
          {
            recipe_name: `${recipe_name} 찜`,
            recipe_id: 4,
          },
          {
            recipe_name: `${recipe_name} 밥`,
            recipe_id: 5,
          },
          {
            recipe_name: `${recipe_name} 국`,
            recipe_id: 6,
          },
          {
            recipe_name: `${recipe_name} 튀김`,
            recipe_id: 7,
          },
        ],
      }),
    );
  }),
  rest.post(
    `${baseURL}${API_PATH.ADD_DIET_WITH_FAVORITE}/:date`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
  rest.post(
    `${baseURL}${API_PATH.ADD_DIET_WITH_CUSTOM}/:date`,
    (req, res, ctx) => {
      console.log(req.body);
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
  rest.delete(`${baseURL}${API_PATH.DELETE_DIET}`, (req, res, ctx) => {
    const date = req.url.searchParams.get('date');
    const mealTime = req.url.searchParams.get('mealtime');
    return res(ctx.status(200));
  }),
];

export default recipeHandler;
//https://han-py.tistory.com/400 참고
