import Home from '../pages/home'
import LeaderBoard from '../pages/leaderboard'
import Play from '../pages/play'
import Unlimited from '../pages/unlimited'

export const routerConstant = [
  { path: '/', element: <Home /> },
  { path: '/leaderboard', element: <LeaderBoard /> },
  { path: '/play', element: <Play /> },
  { path: 'unlimited', element: <Unlimited /> },
]
