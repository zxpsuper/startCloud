/**
 * Created by Super on 2017/4/24.
 */
$(document).ready(function (){
    $('#ul').hide(); //��ҳ�����������б�
    $('#it').hover( //��껬��������Ŀʱ
        function(){
            $('#ul').show(); //��ʾ�����б�
            $(this).css({'color':'red','background-color':'orange'}); //���õ�����Ŀ��ʽ����Ŀ
        },
        function(){
            $('#ul').hide(); //����ƿ������������б�
        }
    );
    $('#ul').hover( //��껬�������б�����ҲҪ��ʾ����ֹ�޷���������б�
        function(){
            $('#ul').show();
        },
        function(){
            $('#ul').hide();
            $('#it').css({'color':'white','background-color':'black'}); //����ƿ������б�󣬵�����Ŀ����ʽҲ���
        }
    );
    $('li').hover( //��껬�������б��Ǹı䵱ǰ��Ŀ��ʽ
        function(){
            $(this).css({'color':'red','background-color':'orange'});
        },
        function(){
            $(this).css({'color':'white','background-color':'black'});
        }
    );
});