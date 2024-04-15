# Project: 0x03. ES6 data manipulation

## Resources

### Read or watch:-

- [Array](https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ)
- [Typed Array](https://intranet.alxswe.com/rltoken/YZ5RtzAPTaWtF00MYbXuVw)
- [Set Data Structure](https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg)
- [Map Data Structure](https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw)
* [WeakMap](https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdg)

## Tasks

0. [Basic list of objects](./0-get_list_students.js) :

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

- `Guillaume`, id: `1`, in `San Francisco`
- `James`, id: `2`, in `Columbia`
- `Serena`, id: `5`, in `San Francisco`

```bash
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```

| Task | File |
| ---- | ---- |
| 1. More mapping | [1-get_list_student_ids.js](./1-get_list_student_ids.js) |
| 2. Filter | [2-get_students_by_loc.js](./2-get_students_by_loc.js) |
| 3. Reduce | [3-get_ids_sum.js](./3-get_ids_sum.js) |
| 4. Combine | [4-update_grade_by_city.js](./4-update_grade_by_city.js) |
| 5. Typed Arrays | [5-typed_arrays.js](./5-typed_arrays.js) |
| 6. Set data structure | [6-set.js](./6-set.js) |
| 7. More set data structure | [7-has_array_values.js](./7-has_array_values.js) |
| 8. Clean set | [8-clean_set.js](./8-clean_set.js) |
| 9. Map data structure | [9-groceries_list.js](./9-groceries_list.js) |
| 10. More map data structure | [10-update_uniq_items.js](./10-update_uniq_items.js) |