#pragma checksum "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "aa82e6d28fb2f0a89e6512f54c45013236f69d4b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
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
#line 1 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\_ViewImports.cshtml"
using OneToMany;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\_ViewImports.cshtml"
using OneToMany.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"aa82e6d28fb2f0a89e6512f54c45013236f69d4b", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9302dc10b5fcafc855e93fe543f6741e4f3f4a0a", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Container>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "_MessageForm", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Welcome ");
#nullable restore
#line 6 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                             Write(Model.User.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\r\n    <h3>Here are our users:</h3>\r\n");
#nullable restore
#line 8 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
     foreach (var user in Model.Users)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <div><a");
            BeginWriteAttribute("href", " href=\"", 243, "\"", 263, 2);
            WriteAttributeValue("", 250, "/", 250, 1, true);
#nullable restore
#line 10 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
WriteAttributeValue("", 251, user.UserId, 251, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 10 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                                Write(user.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a> - ");
#nullable restore
#line 10 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                                                 Write(user.Email);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
#nullable restore
#line 11 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
             foreach (var message in user.CreatedMessages)
            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                <p>");
#nullable restore
#line 13 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
              Write(message.Content);

#line default
#line hidden
#nullable disable
            WriteLiteral(".</p>\r\n");
#nullable restore
#line 14 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                 if (Model.LoggedUserId == user.UserId)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <a class=\"btn-sm btn-warning\"");
            BeginWriteAttribute("href", " href=\"", 537, "\"", 568, 2);
            WriteAttributeValue("", 544, "/edit/", 544, 6, true);
#nullable restore
#line 16 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
WriteAttributeValue("", 550, message.MessageId, 550, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> <a class=\"btn-sm btn-danger\"");
            BeginWriteAttribute("href", "\r\n            href=\"", 607, "\"", 653, 2);
            WriteAttributeValue("", 627, "/delete/", 627, 8, true);
#nullable restore
#line 17 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
WriteAttributeValue("", 635, message.MessageId, 635, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a>\r\n");
#nullable restore
#line 18 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 18 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
            WriteLiteral("        </div>\r\n");
#nullable restore
#line 21 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("    <h3>Other query from messages to users</h3>\r\n");
#nullable restore
#line 23 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
     foreach (var message in Model.Messages)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <div>");
#nullable restore
#line 25 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
        Write(message.Content);

#line default
#line hidden
#nullable disable
            WriteLiteral(" - ");
#nullable restore
#line 25 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
                           Write(message.Creator.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n");
#nullable restore
#line 26 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "aa82e6d28fb2f0a89e6512f54c45013236f69d4b9133", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
#nullable restore
#line 29 "C:\Users\mimi_\Documents\CodingDojo\Instructor\Full-Stack-28-03-21\wk12\d5\OneToMany\Views\Home\Index.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.Message);

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext.AddTagHelperAttribute("for", __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("</partial>\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Container> Html { get; private set; }
    }
}
#pragma warning restore 1591
