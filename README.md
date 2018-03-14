# Sample Star War Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Components Usages

#### Custom HTTPClientComponent
- Import `CustomHttpService` service. 
  
  Example: `import {CustomHttpService} from "APP_PATH/common/services/customHttp.service";`
- Add service in `constructor(private http: CustomHttpService) {}`
- USAGE: 
	- GET: `http.get<any>( URL ,{cache: false})`
	- POST: `http.post<any>( URL,{cache:true}, options);`
	- PUT: `http.put<any>( URL,{cache:true}, options);`
	- DELETE: `http.delete<any>( URL,{cache:true}, options);`
- Description: It will be used to cache api's response and other config needed in request/response. 

#### NotificationMessage Component (Show after: success/fail in API)
- Import `AppUtils` service. 
  Example: `import { AppUtils } from 'APP_PATH/common/utils/app.utils';`
- Add service in `constructor(private util: AppUtils) {}`
- Available Options: ( `?` represents optional)
	- messageTitle `?`: string;
    - messageDescription `?`: string;
    - messageType: number;
    - showNotification: boolean;
    - timeout `?`: number;
    - html `?`: string;
- Available Message Type:
	- `NOTIFICATION_MESSAGE_TYPE`
		- SUCCESS
        - ERROR
        - INFORMATION,
        - HTML
- USAGE: 

		this.util.showNotificationMessage({
			messageType: NOTIFICATION_MESSAGE_TYPE.INFORMATION,
			messageTitle: 'hello world',
			messageDescription: 'yo'
		});
- Description: It will show notification message on successful request / error request. 


#### Table component description Start.

 `-In HTML`:
<data-table (actionCallback)="tableCallbacks($event)" [tableConfig]="tableConfig" [tableData] = "data" [dynamicData] = 'moreActionData' (loadMoreCallBack)="loadMore($event)" (pagiNationCallback)="pagination($event)"></data-table>


#actionCallback: callbacks for action handlers. more|next
#tableConfig: configuration of table, like pass header name ,key etc.
#tableData : data which you want to render.
#dynamicData : If you want to add Data dynamic like click on more you want to load data in selectbox or popover.
#loadMoreCallBack: call back for load dynamic data.
#pagiNationCallback: change page event.


## Sample Data which we have to pass in the table component.
   data: any= [
  	   {
  		"siNumber":"939090493948",
  		"plan":"test Plan",
  		"status":"ACTIVE"

  	   },
  	   {
  		"siNumber":"9904939485",
  		"plan":"test Plan 1",
  		"status":"OVERDUE"
  	   }
  ]

  ## Table Configuration  
	{
		configData:{
		headerName :"Name of the column",
  		key:'Map value in data. (row value). if working with nested object pass value. #example person.name',
  		sortable:"Boolean #pass if want to make column sortable",
  		category:"view|action # view: for static value to be displayed, action: want some operation like click",
        actionType:"more|next|info # Required if catageory is Action, left blank if not",
        displayCallback:"accept function # If want to hide and show field based on some condition. if not pass null",
        style:{
          width:'accept in %. #define widthh of column',
          action:"style for action Icon # more|next",
          view:"style for test view # rounded",
          iconRight:"icon after column",
		  iconLeft:"icon before column",
          customClass:"pass function if you want to add custom class based on condition"
        }
	},
	options:{
     sortBy: "initial sorting when table is loaded",
     orderBy:"asc|dsc #defined order",
     selectAll:"true|false # If we want checkbox in table"
    },
}

`-In Component`
## Example 
  tableConfig :any= {
  	configData:[
      {
  		headerName:"connection",
  		key:'siNumber',
  		sortable:false,
  		category:"view",
        actionType:null,
        displayCallback:null,
        style:{
          width:'30%',
          action:null,
          view:null,
          icon:null,
          customClass:null
        }
  	  },
  	  {
  		  headerName:"plan",
  		  key:'plan',
  		  sortable:true,
  		  category:"view",
        actionType:null,
        displayCallback:null,
        style:{
          width:'30%',
          action:null,
          view:null,
          icon:'icon-outlined-circle-information',
          customClass:null
        }
  	  },
  	  {
  		  headerName:"status",
  		  key:'status',
  		  sortable:true,
  		  category:"view",
  		  actionType:null,
        displayCallback:null,
        style:{
          width:'20%',
          action:null,
          view:"btn-rounded",
          icon:null,
          customClass:this.addCustomClass
        }
  	  },
  	  {
  		  headerName:"",
  		  headerType:"",
  		  key:'',
  		  sortable:false,
  		  category:"action",
  		  actionType:'more',
        displayCallback:this.displayField,
  		  style:{
          width:'5%',
          action:'more',
          view:null,
          icon:null,
          customClass:null
        },
  	  },
  	  {
  		  headerName:"",
  		  headerType:"",
  		  key:'',
  		  sortable:false,
  		  category:"action",
  		  actionType:'next',
        displayCallback:null,
  		  style:{
          width:'10%',
          action:'link-arrow',
          view:null,
          icon:null,
          customClass:null
        }
  	  }
    ],
    options:{
     sortBy: "status",
     orderBy:"asc",
     selectAll:true
    },

  }
  
  moreActionData:any;
  
  


  tableCallbacks (_type)
  {
    
    alert("Action");
  
  }

  loadMore (_type)
  {
    alert(_type);
    this.moreActionData  = [
        {
          name:"Pay now",
          id:1
        },
        {
          name:"Pay Partially",
          id:2
        },
        {
          name:"already paid FULLY",
          id:3
        },
        {
          name:"already paid PARTIALLY",
          id:4
        }
    ];
  }
  

  pagination (_count)
  {
    alert(_count)
  }

  addCustomClass (_config , _data)
   {
       if(_data.status == 'ACTIVE'){
         return 'btn-rounded green';
       }
       else if(_data.status == 'OVERDUE'){
         return 'btn-rounded orange';
       }
   }

   displayField (_config , _data)
   {
       if(_data.status == 'ACTIVE'){
         return false;
       }
       return true;
   }

   ## table component Description End.



   #### Datepicker component description Start.
    
    `-In HTML`:
  <custom-datepicker (actionCallback)="getSelectedDate($event)" [datePickerConfig]="config"></custom-datepicker>

  #actionCallback: callbacks for action handlers. Get fromDate|toDate whenever the date is selected from datepicker
  #datePickerConfig: configuration of datepicker.
  
  `-Datepicker config`
  ##datePicker Config Sample Object.
  config: any = {
        displayMonths: {
            multiple: true/false,
            single: false/true
        },
        defaultDate: this.calendar.getNext(this.calendar.getToday(), 'd', 20) // For Ex. Set fromDate 20 days after the current date in the datepicker as default. This can be `null`
  }

`-actionCallback Response `
  ##actionCallBack Response Sample Object.

  { 
      'fromDate': { 
          'customDate': {
            'day': 23,
            'month': 02,
            'year': 2018
          }, 
          'formattedDate': 23-02-2018
      },
      'toDate'  : {
        'customDate': {
            'day': 30,
            'month': 02,
            'year': 2018
          }, 
          'formattedDate': 30-02-2018
      }
  }
   #### Datepicker component description End.



#### tooltip component description Start.
    
    `-In HTML`:
  <custom-tooltip [_tooltip_content]="_data" [_tooltip_type]="toolTipContent"></custom-tooltip>

  
  #_tooltip_type: Used for dynamic tooltip template execution.
  #_tooltip_content: Pass the data required by your template.
  
 #### tooltip component description End.
   
# star-war-planet
