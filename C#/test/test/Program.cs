using Microsoft.Graph;
using Microsoft.Graph.Auth;
using Microsoft.Identity.Client;
using System.Security;
var scopes = new List<string>() { "Calendars.Read", "Calendars.Read.Shared" };
var securePassword = new SecureString();
var username = "charliehrbot@zing.dev";
var password = "2pu6-pL-QjQPjcymqmMKEuAYT7M@x*8rREvjRxi_u94gGnUPfdui@WMj3H!QkB!ajn@cRJcDWAnhwGn.C_86ppoMoW@G2.J7ZNDq";
foreach (char c in password)
    securePassword.AppendChar(c);
var clientId = "9a221c56-98b7-43fe-9b09-99ffda13a7af";
var tenantId = "9666d726-a2ec-45d8-89ff-406f6f714427";
IPublicClientApplication app = PublicClientApplicationBuilder
    .Create(clientId)
    .WithTenantId(tenantId)
    .Build();
var authRes = await app.AcquireTokenByUsernamePassword(scopes, username, password).ExecuteAsync();
var refreshAt = authRes.ExpiresOn.AddMinutes(-5);
if (string.IsNullOrWhiteSpace(authRes.AccessToken) || refreshAt < DateTime.UtcNow)
    throw new Exception("failed to get access token");
var graphClient = new GraphServiceClient(new UsernamePasswordProvider(app, scopes));
// using MSGraph API to fetch calendar events from Outlook
var dateToday = DateTime.UtcNow;
var dateBegin = new DateTime(dateToday.Year, dateToday.Month, 1).ToString("yyyy-MM-ddTHH:mm:ssK");
var dateFuture = DateTime.UtcNow.AddMonths(6).ToString("yyyy-MM-ddTHH:mm:ssK");
Console.WriteLine("Date in 6 months time: " + dateFuture);
var queryOptions = new List<QueryOption>()
{
    new QueryOption("startdatetime", dateBegin),
    new QueryOption("enddatetime", dateFuture)
};
var calendarId = "AQMkADg0MDcyZmI5LTliY2YtNDdiNC1iZWI2LTczYTRmNzg1NzI2OQBGAAADKg-2StF6KEuhNVPHm3FHqwcA1ZtO6tI9wUOEay2T1qSRSwAAAgEGAAAA1ZtO6tI9wUOEay2T1qSRSwAAAkXqAAAA";
var delta = await graphClient.Me.Calendars[calendarId].CalendarView
    .Delta()
    .Request(queryOptions)
    .GetAsync();
//object deltaLink;

/*if (delta.AdditionalData.TryGetValue("@odata.deltaLink", out deltaLink))
{
    Console.WriteLine(deltaLink);
}
var eventsList = delta.ToList();
for (var i = 0; i < eventsList.Count; i++)
{
    Console.WriteLine("Subject: " + eventsList[i].Subject);
}*/


var currentMonth = dateToday.Month;
Console.WriteLine("starts here");
Console.WriteLine(dateToday.ToString("MMM").ToUpper());


object deltaLink;
if (delta.AdditionalData.TryGetValue("@odata.deltaLink", out deltaLink))
{
    Console.WriteLine(deltaLink);
    var tokenIndex = deltaLink.ToString().IndexOf("$deltatoken=");
    Console.WriteLine(deltaLink.ToString().Substring(tokenIndex + 12));
}
var eventsList = delta.ToList();
for (var i = 0; i < eventsList.Count; i++)
{
    Console.WriteLine("Subject: " + eventsList[i].Subject);
}