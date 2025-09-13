from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class Feedback(Base):
    __tablename__ = 'feedbacks'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email=Column(String)
    phoneno = Column(String)
    location = Column(String)
    description = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))

    creator = relationship("User", back_populates="feedbacks")

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)

    feedbacks = relationship('Feedback', back_populates="creator")

class Report(Base):
    __tablename__='reports'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    elocation = Column(String, nullable=True)  # Optional field for extra location
    description = Column(String, nullable=False)