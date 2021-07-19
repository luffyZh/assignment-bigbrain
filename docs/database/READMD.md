# 数据库文件夹

## 用户表

| - | 类型 | 描述 |
| -- | -- | -- |
| id | String | 用户id |
| username | String | 登录用户名 |
| password | String | 密码 |
| nickname | String | 用户昵称 |

## 试题表

| - | 类型 | 描述 |
| -- | -- | -- |
| id | String | 试题id |
| name | String | 试题名称 |
| answer | Array<AnswerObj> | 答案数组 |
| right | Enum | 正确答案 |
| nickname | String | 用户昵称 |

```js
interface AnswerObj {
  type: 'text | image | video',
  value: 'content | url',
  label: 'A | B | C | D',
}
```

## 试卷表

| - | 类型 | 描述 |
| -- | -- | -- |
| id | String | 试卷id |
| name | String | 试卷名 |
| list | Array<id> | 试卷包含的试题数组 |
| creator | String | 试卷创建者 |

## 用户试题试卷表

| - | 类型 | 描述 |
| -- | -- | -- |
| user | String | 用户id |
| paper | String | 所属试卷id |
| question | String | 试题id |
| result | Boolean | 结果 |
| time | Number | 答题用时 |