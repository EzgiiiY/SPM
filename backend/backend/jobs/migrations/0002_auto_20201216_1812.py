# Generated by Django 3.1.3 on 2020-12-16 18:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='applicants',
            field=models.ManyToManyField(related_name='jobs', to='accounts.Employee'),
        ),
        migrations.AlterField(
            model_name='job',
            name='employer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='accounts.employer'),
        ),
        migrations.RemoveField(
            model_name='job',
            name='keyword',
        ),
        migrations.AddField(
            model_name='job',
            name='keyword',
            field=models.ManyToManyField(related_name='jobs', to='jobs.Keyword'),
        ),
    ]
