import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridfilter'
})
export class GridfilterPipe implements PipeTransform {

  transform(items: any[], filtertext?: string): any {
 
 
    if (!items || !filtertext||items.length==0 ||filtertext.length<3) {
    
      return items;
    }
    filtertext=filtertext.toLowerCase();
    var properties = Object.getOwnPropertyNames(items[0]);
    delete  properties['$key']
    return items.filter(item => {

      var result = false;
      properties.forEach(element => 
      {
          var itemElement=item[element].toString()
        if (itemElement.toLowerCase().indexOf(filtertext) !== -1) 
        {
          result = true;
         return
        }
       
      }
        )
      
      return result;
    });
  }

}