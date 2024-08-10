# React-classes
My react classes


## react js

> > js(javascript)
> > ts(typescript)


Virtual DOM 
                                 home.jsx

        BannerSection.jsx           Navbar.jsx              section.jsx     footer.jsx


                                    homePage.jsx    aboutUs.jsx



Virtual DOM:

        I updated <p> in <body> -----------> Virtual DOM -------> DOM ------> HTML Manipulations reflected on web pg


SPA:

index.html
    <html>
        <body>
            <div id="root">
            </div>
        </body>
    </html>


## spa(single page application)=> whole website contains a single html page
components(grp codes)
data binding =>uni directional , flow of the data
virtual DOM
 i update <p></p>in body........>virtual DOM......>html maniplation reflected on webpage
>>.jsx(it is a combination of both javascript and html files)

## components:
  >>class componenets(older version)
  >>function components(newest version)

  redex(state management)
  hocks(life cycle methods)

  npx=> node package exection
## npx create-react-app my-app

 ## cd my-app
 ## npm start
 
 ## components and workflow
 ## state & props

 ## state => Data required for a component

 var name "Davetown"
 state ={
 [
   {
    },
   {
    }
 ]
 }
 ## hooks =>
 usestate(), setstate()

 import {usestate} from "react";
 const [variable,func]=usestste();
 const [count,setcount] = usestate();

 const[num , setnum] = usestate();
 
 props=> where we will be passing data among the components
 parent node =>child node
 eg: App.js=>ClassComponent.jsx\functionComponent.jsx

 <FunctionComponent name="Devtown" age={20}>

 ## Routing N layouts in reactjs
 Router=> routes> route

 ## npm i react-router-dom

 workflow wrt ur routes
 index.js>>app.js(browser router)>>diff routes

 //webpage

/contact /aboutUs /signIn /signUp

## Layouts (HOC || High Order Component) 
/parentSignInAndUp

Nav n Footer
>>hoc's can add aditional info/features to the existing components.
## react life cycle methods
render(){

}

## cdm
(componentDidmount(){

})
1 web pg >>4 components>> 2 components
componentDidmount(){
input tab => enter
}

componentwillunmount(){

}

# useEffect

