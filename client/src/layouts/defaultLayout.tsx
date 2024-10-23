import { Outlet } from 'react-router-dom'
import WeatherPattern from '../canvas/weatherPattern'

export default function DefaultLayout() {
  return (
    <main className="default-backround">
      <WeatherPattern />
      <Outlet />
    </main>
  )
}
