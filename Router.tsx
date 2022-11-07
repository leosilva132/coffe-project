import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './src/Layouts/DefaultLayout'
import { Checkout } from './src/pages/Checkout'
import { Home } from './src/pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
