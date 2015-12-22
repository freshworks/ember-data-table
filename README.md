# Ember Data Table

An Ember cli addon which allows you to create a data table with some useful features quick & hassle free.

## Installation

`ember install git+ssh://git@github.com:freshdesk/ember-data-table.git --save`

## Usage:

This example snippet will show us how to use the ** simple data table** components in your app.

```
{{#ui-list class="table-bulk-actions table-avatar"}}
	{{#ui-list-header onSort="doSort"}}
      {{#ui-list-header-item class="no-border"}}
      	{{custom-checkbox checked=allChecked name="allChecked"}}
      {{/ui-list-header-item}}
      {{ui-list-header-item title="Name" class="xyz"}}
      {{ui-list-header-item
      	title="Lead Score"
        sort="lead_score" 
        sortType="desc"}}
      {{ui-list-header-item title="Stage" sort="lead_stage"}}
      {{ui-list-header-item title="Last Contacted" sort="last_contacted"}}
    {{/ui-list-header}}

    {{#ui-list-item items=model as |item|}}
    	{{partial 'xyz/-list-item'}}
    {{/ui-list-item}}
    <tfoot>
      <tr>
        <td colspan="2">
          {{ui-pagination-showing count=totalCount current=page steps=perPage}}
        </td>
        <td colspan="3" class="align-right">
          {{#if showPrevNext}}
          	{{ui-pagination count=totalPages current=page}}
          {{/if}}
        </td>
      </tr>
    </tfoot>
{{/ui-list}}
```

###Brief about components & attributes :###
_______

#### ui-list Component ####

Just a wrapper for <\table> element In future we'll bring some attrs which will helps to configure the table (eg: pagination=true, selectAll=true) etc.
________

#### ui-list-header Component ####

Just a wrapper for <\thead> element. In future we'll bring some attrs which will helps to do column-wise actions.

* **onSort (@string)** - (default: "onSort") action to fire and will provide with a param eg : 

```
{ sort: 'sorted_column_name', sortType: 'asc'}.
```
________

#### ui-list-header-item Component ####

It's a wrapper for <\td> element.

```
{{#ui-list-header-item class="xyz"}}
	<div>bla bla content</div>
{{/ui-list-item}}

(or)

{{ui-list-header-item title="column 1" class="xyz" sort="first_name" sortType="desc"}}
```

* **title (@string)** - Column header title to display.

* **sort (@string)** - Column to sortBy "key".

* **sortType (@string)** - Use this if need to set the initial sortBy Column to orderBy ascending / decending.

**note: backend implementation required to perform (sortBy & orderBy) action.**
________

#### ui-list-item Component ####

It is a wrapper for <\tr> element. 

**items (@array)** - Will accept only array. important thing that we should use this as a contextual component which means eg: 

```
{{#ui-list-item items=tableItems as |item|}}
	<td>
    	{{item.firstName}}
    <td>
    <td>
    	{{item.lastName}}
    <td>
{{/ui-list-item}}

(or)

{{#ui-list-item items=tableItems as |item|}}
	anything but should be inside <\td> tags and item is each data of array
    (loop handled inside the component)
{{/ui-list-item}}
```
________
#### ui-pagination & ui-pagination-showing Component ####

to use pagination and pagination-showing component we must need to import and extend a mixin ('ember-data-table/mixins/pagination/route') into the route and ('ember-data-table/mixins/pagination/controller') into the controller to activate it.

```
<tfoot>
  <tr>
    <td colspan="2">
    	{{ui-pagination-showing count=totalCount current=page steps=perPage}}
    </td>
    <td colspan="3" class="align-right">
    	{{ui-pagination count=totalPages current=page}}
    </td>
  </tr>
</tfoot>
```

* **count (@computed property)** - total count of the table data (by default we using ember data and activemodel serializer to serialize so calculating the total count from meta) but developers can overide the data retrieving method / calculation in mixin [ember-data-table/mixins/pagination/route](https://github.com/freshdesk/ember-data-table/blob/master/addon/mixins/pagination/controller.js) as per there backend api data structure or use default computed propety "totalPages" (mixin will take care of the rest).

* **current (@computed property)** - must use the same name "page" (mixin will take care of the rest).

* **steps (@computed property)** - must use the same name "perpage" (mixin will take care of the rest).

####----[showing component]----
* **count (@computed property)** - must use the same name "totalPages" (mixin will take care of the rest).

* **current (@computed property)** - must use the same name "page" (mixin will take care of the rest).
________

## RFC

* **Build it as a preliminary Addon to solve some basic use-cases & frequently used features but moving forward to Ember data table v 1.0 will be stable, flexible, configurable, enhanceable.**

* Planned to bring default template to render table by just feeding JSON into it.

* configuration mapping for table headers and data.

* Enhanceable architecture to build cool features like pagination, selectall, sortBy & orderBy (server-side / local), add / remove columns etc.


##Watch this area for more info about v 1.0##

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
