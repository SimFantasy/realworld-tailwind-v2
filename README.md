# realworld-tailwind-v2

较上个版本的一些调整和优化：
1. 使用了`Query Key Factory`来做`query key`的管理。
2. 使用了`@uiw/react-md-editor`作为`article`的编辑器，并使用该编辑器的预览作为`markdown`的`article`预览。
3. 修复了一些单词拼写错误。

总结：
1. `Query Key Factory`能通过对`query key`的管理很好的解决`react-query`的缓存失效问题。
2. `Query Key Factory`本身还有很多bug，虽然有相应的解决办法，但还是需要谨慎使用。目前项目中发现的有两个：
  1. 在useMutation中使用一些额外的参数作为queryKey和`Query Key Factory`提供的queryKey一起使用时会undefine
  2. 在使用`Query Key Factory`对queryFn进行管理后，`useQuery`时`enabled`会失效
3. 需要对项目整体功能有更好的理解，才能将模块和功能做更好的拆分。
