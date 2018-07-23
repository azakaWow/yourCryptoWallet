module.exports = function (sortField, sortOrder, coins ) {
      let sortFunction;
      

      switch (sortField) {
          case 'rank':
              if(sortOrder) {
                sortFunction = function(a,b){
                  return a['rank'] - b['rank']; 
                };
                break;
              }
              else {
                sortFunction = function(a,b){
                  return b['rank'] - a['rank']; 
                };
                break;
              }
          case 'price':
              if(sortOrder) {
                sortFunction = function(a,b){
                  return a['quotes']['USD']['price'] - b['quotes']['USD']['price']; 
                };
                break;
              }
              else {
                sortFunction = function(a,b){
                  return b['quotes']['USD']['price'] - a['quotes']['USD']['price']; 
                };
                break;
              }
          case 'name':
            if(sortOrder) {
              sortFunction = function(a,b) {
                var a = a['name'].toLowerCase();
                var b = b['name'].toLowerCase();
                if (a < b) {
                  return -1;
                }
                else {
                  return 1;
                }
                return 0;
              };
              break;
            }
            else {
              sortFunction = function(a,b){
                var a = a['name'].toLowerCase();
                var b = b['name'].toLowerCase();
                if (a < b) {
                  return 1;
                }
                if (a > b) {
                  return -1;
                }
                return 0;
              };
              break;
            }
          case 'change':
              if(sortOrder) {
                sortFunction = function(a,b){
                  return a['quotes']['USD']['percent_change_24h'] - b['quotes']['USD']['percent_change_24h']; 
                };
                break;
              }
              else {
                sortFunction = function(a,b){
                  return b['quotes']['USD']['percent_change_24h'] - a['quotes']['USD']['percent_change_24h']; 
                };
                break;
              }
          case 'volume': 
            if(sortOrder) {
              sortFunction = function(a,b){
                return a['quotes']['USD']['volume_24h'] - b['quotes']['USD']['volume_24h']; 
              };
              break;
            }
            else {
              sortFunction = function(a,b){
                return b['quotes']['USD']['volume_24h'] - a['quotes']['USD']['volume_24h']; 
              };
              break;
            }
          case 'circSupply' :
          if(sortOrder) {
            sortFunction = function(a,b){
              return a['circulating_supply'] - b['circulating_supply']; 
            };
            break;
          }
          else {
            sortFunction = function(a,b){
              return b['circulating_supply'] - a['circulating_supply']; 
            };
            break;
          } 
        }

        
        return coins.sort(sortFunction);
} 
