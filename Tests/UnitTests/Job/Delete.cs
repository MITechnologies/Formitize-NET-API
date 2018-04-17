﻿using NUnit.Framework;
using System;
using Formitize.API;
using Formitize.API.Model;

namespace Tests.UnitTests
{
    [TestFixture()]
    public class NUnitJobDelete
    {
        [Test()]
        public void delete_job()
        {
            var client = new Client(Helper.createCredentials());
            var job = new Formitize.API.Model.Job();

            job.Title = "Test";

            var form = new Formitize.API.Model.JobFormData();

            form.FormID = 10355;
            form.SetValue("0", "clientName", "Test Client")
                .SetValue("0", "clientEmail", "test@test.com")
                .SetValue("0", "businessType", "Option A");

            job.AttachJobForm(form);


            var task = Methods.PostJob(client, job);
            var Response =  task.Result;

            Assert.IsFalse(Response.JobID == 0, "failed");

            var deleteTask = Methods.DeleteJob(client, Response.JobID);
            var deleteResponse = deleteTask.Result;

            Assert.AreEqual(deleteResponse.Message, "Successfully deleted job.");

            
        }
    }
}
