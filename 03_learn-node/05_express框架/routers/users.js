/**
 * 举个栗子:
 *    请求所有的用户信息: get     /users
 *    请求某一个用户信息: post    /users/:id
 *    增加某一个用户信息: post    /users       body  { username: '', password: '' }
 *    修改某一个用户信息: put     /users/:id   body  { username: '', password: '' }
 *    删除某一个用户信息: delete  /users/:id
 */

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(["zjt", "sjh", "lk", "wlc"]);
});

router.post("/", (req, res, next) => {
  res.json("创建用户成功~");
});

router.post("/:id", (req, res, next) => {
  res.json(`获取id为${req.params.id}的用户信息~`);
});

router.put("/:id", (req, res, next) => {
  res.json("修改用户信息成功~");
});

router.delete("/:id", (req, res, next) => {
  res.json("删除用户信息成功~");
});

module.exports = router;
