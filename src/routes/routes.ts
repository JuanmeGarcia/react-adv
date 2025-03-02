import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../lazyload/pages/NoLazy";

const Lazy1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */'../lazyload/pages/LazyPage'))
const Lazy2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */'../lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */'../lazyload/pages/LazyPage3'))
const LazyLayout = lazy(() => import( /* webpackChunkName: "Lazy Layout" */'../lazyload/layouts/LazyLayout'))



type JSXElement = () => JSX.Element

type Route = {
  to: string,
  path: string
  Component: LazyExoticComponent<JSXElement> | JSXElement
  name: string
}

export const routes: Array<Route> = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy dashboard'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]