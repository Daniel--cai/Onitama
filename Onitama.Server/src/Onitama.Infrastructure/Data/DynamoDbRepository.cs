﻿using Onitama.Domain.Interfaces;
using Onitama.Application.SharedKernel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Infrastructure.Data
{
    public class DynamoDbRepository
    {
        public T Add<T>(T entity) where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public void Delete<T>(T entity) where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public T GetById<T>(int id) where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public List<T> List<T>() where T : BaseEntity
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity) where T : BaseEntity
        {
            throw new NotImplementedException();
        }
    }
}
