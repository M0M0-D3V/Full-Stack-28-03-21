#pragma checksum "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5f48293004c150eb10ebc8b4bd543ed42fa618f4"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_UserDetails), @"mvc.1.0.view", @"/Views/Home/UserDetails.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\_ViewImports.cshtml"
using ManyToMany;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\_ViewImports.cshtml"
using ManyToMany.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5f48293004c150eb10ebc8b4bd543ed42fa618f4", @"/Views/Home/UserDetails.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9e77bb55b9db590f0cc31a38f58609ad60241552", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_UserDetails : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5f48293004c150eb10ebc8b4bd543ed42fa618f43376", async() => {
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>User Details</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5f48293004c150eb10ebc8b4bd543ed42fa618f44560", async() => {
                WriteLiteral("\r\n    <p>Number of messages by user: ");
#nullable restore
#line 12 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
                              Write(ViewBag.NumMessages);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n    <p>Longest Message Char: ");
#nullable restore
#line 13 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
                        Write(ViewBag.LongestMessage);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n    <p>User With Longest Message: ");
#nullable restore
#line 14 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
                             Write(ViewBag.UserWithLongest.Name);

#line default
#line hidden
#nullable disable
                WriteLiteral(" - ");
#nullable restore
#line 14 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
                                                             Write(ViewBag.UserWithLongest.Email);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n    <p>Unrelated messages to user:</p>\r\n");
#nullable restore
#line 16 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
      
        foreach (var message in ViewBag.UnrelatedMessages)
        {

#line default
#line hidden
#nullable disable
                WriteLiteral("            <p>");
#nullable restore
#line 19 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
          Write(message.Creator.Name);

#line default
#line hidden
#nullable disable
                WriteLiteral(" - ");
#nullable restore
#line 19 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
                                  Write(message.Content);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n");
#nullable restore
#line 20 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk13\d1\ManyToMany\Views\Home\UserDetails.cshtml"
        }
    

#line default
#line hidden
#nullable disable
                WriteLiteral("    <a href=\"/\">Go Back Home</a>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n</html>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
