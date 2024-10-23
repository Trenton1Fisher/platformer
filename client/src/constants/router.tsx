import Home from '../pages/home'
import LeaderBoard from '../pages/leaderboard'
import Play from '../pages/play'
import Unlimited from '../pages/unlimited'
import DefaultLayout from '../layouts/defaultLayout'
import UnlimitedPlayLayout from '../layouts/unlimitedPlayLayout'

export const routerConstant = [
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/leaderboard', element: <LeaderBoard /> },
      { path: '/play', element: <Play /> },
    ],
  },
  {
    element: <UnlimitedPlayLayout />,
    children: [{ path: '/unlimited', element: <Unlimited /> }],
  },
]
