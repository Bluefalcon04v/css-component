export function* range(start:number, end?:number){
    if(end == undefined){
        end = start
        start=1
    }

    for(;start <= end; start++){
        yield start;
    }
}