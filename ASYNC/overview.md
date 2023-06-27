


## getData ----->processData ----------> renderData




getNumber -----> maxNumbers -----> renderNumber


Promise
getNumbers <------cb <-------maxNumber

const cbComponent =(success, error) => {
    ...
    if(isError){
        error(...)
    }else{
        success(...)
    }

}


    Ideea de promisiune vine de la ideea de a imbraco blocul de cod intr-un obiect specializat, wrapper.
    DAca il impachetam corect, mecanismul acestui obiect va avea grija ce sa faca mai departe cu el

Promise (wrapper){         <-------------- state:pending   --> fulfiled 
                                                            -----> rejected
    (resolve, reject)               
    block of async code{                                    
        ....
        ...
        ...
        if(ok) resolve()
        if(err) reject()
    }
}