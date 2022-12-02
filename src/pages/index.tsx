import React, {Component} from 'react'

import ReactToPrint from 'react-to-print';

class Index extends Component {
    componentRef: Element;

    render(){
        return(
            <>
            
            <div>
             <ReactToPrint 
             trigger={()=>{
                 return <button
                 type="button"
                 className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
               > Imprimer </button>
             }}
             content={()=>this.componentRef}
             documentTitle = 'new document'
             pageStyle="print"
             
             
             />
            </div>
            <div ref={el=>(this.componentRef=el)}>
            <h2>bonjour a tous </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium porro id eveniet magni neque fuga molestias assumenda asperiores molestiae voluptate maiores natus earum, libero veniam, ullam quasi delectus sunt.</p>
            
            </div>
            
            </>
     
         )
    }
  

}
export default Index